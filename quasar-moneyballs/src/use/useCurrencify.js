export function useCurrencify(amount) {
    // Format: "+ $ 4,999.99" "- $ 999.00"
 
 let posNegSymbol = ''
 if (amount > 0) posNegSymbol = '+'
 else if (amount < 0) posNegSymbol = '-'
 
 const currencifySymbol = '$',
       amountPositive = Math.abs(amount),
       amountFormatted = amountPositive.toLocaleString('esp-MX', {
         minimumFractionDigits: 2,
         maximumFractionDigits: 2
       })
 
    return `${ posNegSymbol } ${ currencifySymbol } ${ amountFormatted }`
 }