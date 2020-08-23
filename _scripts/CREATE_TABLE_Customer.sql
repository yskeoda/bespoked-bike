USE [BeSpokedBikes]

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

