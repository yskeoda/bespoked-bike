USE [BeSpokedBikes]

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

