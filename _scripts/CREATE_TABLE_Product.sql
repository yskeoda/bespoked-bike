USE [BeSpokedBikes]

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