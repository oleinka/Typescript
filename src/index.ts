function calculateTax (income: number, taxYear = 2025): number {
    if (taxYear < 2025)
        return income * 1.2;
    return income * 1.3;
} 

calculateTax (10_000);