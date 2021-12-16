export const driverMap: Record<string, string> = {
  max: 'max_verstappen',
}

export const getDriver = (driver: string) => {
  const driverFromMap = driverMap[driver]

  return driverFromMap ? driverFromMap : driver
}
