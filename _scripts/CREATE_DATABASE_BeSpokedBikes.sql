CREATE DATABASE BeSpokedBikes

IF (NOT EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES 
			WHERE TABLE_NAME = 'Product'))
BEGIN
    CREATE TABLE Product (
		ProductID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
		ProductName varchar(255) NOT NULL UNIQUE,
		Manufacturer varchar(255) NOT NULL,
		Style varchar(255),
		PurchasePrice decimal(19,4) NOT NULL,
		SalePrice decimal(19,4) NOT NULL,
		QtyOnHand int NOT NULL,
		CommissionPercentage decimal (5,4) NOT NULL,
		CONSTRAINT CHK_Product_Commission CHECK (CommissionPercentage <= 1.0000),
		CONSTRAINT UNIQUE_Product UNIQUE (ProductName, Manufacturer)
)
END

IF (NOT EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES 
			WHERE TABLE_NAME = 'Customer'))
BEGIN
    CREATE TABLE Customer (
		CustomerID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
		FirstName varchar(255) NOT NULL,
		LastName varchar(255) NOT NULL,
		[Address] varchar(255),
		Phone char(10),
		StartDate date NOT NULL,
		CONSTRAINT CHK_Customer_Phone CHECK(Phone NOT LIKE '%[^0-9]%'),				
)
END

IF (NOT EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES 
			WHERE TABLE_NAME = 'SalesPerson'))
BEGIN
    CREATE TABLE SalesPerson (
		SalesPersonID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
		FirstName varchar(255) NOT NULL,
		LastName varchar(255) NOT NULL,
		[Address] varchar(255) NOT NULL,
		Phone char(10) NOT NULL,
		StartDate date NOT NULL,
		TerminationDate date,
		Manager int,
		CONSTRAINT CHK_Phone CHECK(Phone NOT LIKE '%[^0-9]%'),
		CONSTRAINT CHK_NoSelfManage CHECK(Manager <> SalesPersonID),
		CONSTRAINT UNIQUE_SalesPerson UNIQUE(FirstName, LastName, [Address]),
		CONSTRAINT FK_SalesPerson_Manager FOREIGN KEY (Manager) 
			REFERENCES SalesPerson (SalesPersonID)			
)
END

IF (NOT EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES 
			WHERE TABLE_NAME = 'Discount'
				AND TABLE_NAME = 'Product'))

BEGIN
    CREATE TABLE Discount (
		DiscountID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
		ProductID int NOT NULL FOREIGN KEY REFERENCES Product (ProductID),
		BeginDate date NOT NULL,
		EndDate date NOT NULL,
		DiscountPercentage decimal (5,4) NOT NULL		
		CONSTRAINT CHK_Discount_DiscountPercentage CHECK (DiscountPercentage <= 1.0000),
);

CREATE NONCLUSTERED INDEX IX_Discount_DateRange ON Discount (BeginDate, EndDate);

END

IF (NOT EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES 
			WHERE TABLE_NAME = 'Sale'
				AND TABLE_NAME = 'Product'
				AND TABLE_NAME = 'SalesPerson'
				AND TABLE_NAME = 'Customer'))
BEGIN
    CREATE TABLE Sale (
		SaleID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
		ProductID int NOT NULL FOREIGN KEY REFERENCES Product (ProductID),
		SalesPersonID int NOT NULL FOREIGN KEY REFERENCES SalesPerson (SalesPersonID),
		CustomerID int NOT NULL FOREIGN KEY REFERENCES Customer (CustomerID),
		SalesDate date NOT NULL,
		PriceSold decimal(19, 4) NOT NULL,
		CommissionAmount decimal(19, 4) NOT NULL		
);

CREATE NONCLUSTERED INDEX IX_Sale_SalesDate ON Sale (SalesDate);

END