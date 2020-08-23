USE [BeSpokedBikes]

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

