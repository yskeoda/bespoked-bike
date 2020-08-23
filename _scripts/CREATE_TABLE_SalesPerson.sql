USE [BeSpokedBikes]

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

