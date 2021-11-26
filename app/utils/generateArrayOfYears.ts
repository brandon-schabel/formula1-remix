// 1950 was the first year of Formula 1
export const generateArrayOfYears = (
  min = 1950,
  max = new Date().getFullYear()
) => {
  const years = []

  for (let i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}
