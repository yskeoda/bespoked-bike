USE [BeSpokedBikes]
GO
SET IDENTITY_INSERT [dbo].[Product] ON 
GO
INSERT [dbo].[Product] ([ProductID], [ProductName], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES (1, N'FastBike', N'2Fast2Pedal', N'Race', CAST(250.0000 AS Decimal(19, 4)), CAST(1150.0000 AS Decimal(19, 4)), 155, CAST(0.0750 AS Decimal(5, 4)))
GO
INSERT [dbo].[Product] ([ProductID], [ProductName], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES (2, N'OkayBike', N'AVG', N'City', CAST(100.0000 AS Decimal(19, 4)), CAST(500.0000 AS Decimal(19, 4)), 270, CAST(0.0500 AS Decimal(5, 4)))
GO
INSERT [dbo].[Product] ([ProductID], [ProductName], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES (3, N'CalfBuilder', N'AllPainAllGain', N'Mountain', CAST(215.0000 AS Decimal(19, 4)), CAST(875.0000 AS Decimal(19, 4)), 75, CAST(0.0655 AS Decimal(5, 4)))
GO
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
SET IDENTITY_INSERT [dbo].[SalesPerson] ON 
GO
INSERT [dbo].[SalesPerson] ([SalesPersonID], [FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES (1, N'Sells', N'Much', N'1010 Sales St.', N'1112223333', CAST(N'2010-01-01' AS Date), NULL, NULL)
GO
INSERT [dbo].[SalesPerson] ([SalesPersonID], [FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES (3, N'Top', N'Seller', N'9898 Main St.', N'5556667777', CAST(N'2011-05-09' AS Date), NULL, 1)
GO
INSERT [dbo].[SalesPerson] ([SalesPersonID], [FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES (4, N'Great', N'SalesPitch', N'1212 Some St.', N'1012023030', CAST(N'2013-02-03' AS Date), NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[SalesPerson] OFF
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 
GO
INSERT [dbo].[Customer] ([CustomerID], [FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES (1, N'Good', N'Buyer', N'1234 Main St', N'1118887777', CAST(N'2008-08-08' AS Date))
GO
INSERT [dbo].[Customer] ([CustomerID], [FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES (2, N'Buys', N'Alot', N'4545 Good Rd', N'0009990000', CAST(N'2010-10-01' AS Date))
GO
INSERT [dbo].[Customer] ([CustomerID], [FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES (3, N'Big', N'Spender', N'9999 Wide Rd', N'9998887777', CAST(N'2005-05-09' AS Date))
GO
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[Sale] ON 
GO
INSERT [dbo].[Sale] ([SaleID], [ProductID], [SalesPersonID], [CustomerID], [SalesDate], [PriceSold], [CommissionAmount]) VALUES (1, 1, 1, 1, CAST(N'2010-10-10' AS Date), CAST(1150.0000 AS Decimal(19, 4)), CAST(86.2500 AS Decimal(19, 4)))
GO
INSERT [dbo].[Sale] ([SaleID], [ProductID], [SalesPersonID], [CustomerID], [SalesDate], [PriceSold], [CommissionAmount]) VALUES (3, 1, 3, 2, CAST(N'2015-09-10' AS Date), CAST(1150.0000 AS Decimal(19, 4)), CAST(86.2500 AS Decimal(19, 4)))
GO
INSERT [dbo].[Sale] ([SaleID], [ProductID], [SalesPersonID], [CustomerID], [SalesDate], [PriceSold], [CommissionAmount]) VALUES (4, 2, 3, 2, CAST(N'2017-08-30' AS Date), CAST(500.0000 AS Decimal(19, 4)), CAST(25.0000 AS Decimal(19, 4)))
GO
INSERT [dbo].[Sale] ([SaleID], [ProductID], [SalesPersonID], [CustomerID], [SalesDate], [PriceSold], [CommissionAmount]) VALUES (5, 3, 4, 3, CAST(N'2017-04-25' AS Date), CAST(875.0000 AS Decimal(19, 4)), CAST(57.3100 AS Decimal(19, 4)))
GO
SET IDENTITY_INSERT [dbo].[Sale] OFF
GO
SET IDENTITY_INSERT [dbo].[Discount] ON 
GO
INSERT [dbo].[Discount] ([DiscountID], [ProductID], [BeginDate], [EndDate], [DiscountPercentage]) VALUES (1, 2, CAST(N'2010-01-01' AS Date), CAST(N'2010-12-31' AS Date), CAST(0.0500 AS Decimal(5, 4)))
GO
INSERT [dbo].[Discount] ([DiscountID], [ProductID], [BeginDate], [EndDate], [DiscountPercentage]) VALUES (3, 3, CAST(N'2012-05-01' AS Date), CAST(N'2012-09-01' AS Date), CAST(0.1000 AS Decimal(5, 4)))
GO
SET IDENTITY_INSERT [dbo].[Discount] OFF
GO
