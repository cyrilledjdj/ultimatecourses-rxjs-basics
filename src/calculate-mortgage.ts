export default function calculateMortgage(interest, loanAmount, loanLegth) {
    const calculatedInterest = interest / 1200,
        total = loanAmount * calculatedInterest / (1 - (Math.pow(1 / (1 + calculatedInterest), loanLegth)))
    return total.toFixed(2);
}