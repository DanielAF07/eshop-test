export default function formatNumber (num: string | number) {
  let value = num
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  const formatted = value.toFixed(2)
  const parts = formatted.split('.')
  const decimal = parts[1] ?? ''
  let integer = parts[0]
  const regex = /(\d+)(\d{3})/
  while (regex.test(integer)) {
    integer = integer.replace(regex, '$1,$2')
  }
  if (decimal === '' || decimal === '00') {
    return integer
  } else {
    return `${integer}.${decimal}`
  }
}
