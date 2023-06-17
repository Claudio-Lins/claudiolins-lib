// function zipcode
function formatZipcode(zipcode: any) {
  return String(zipcode)
    .replace(/\D/g, '')
    .slice(0, 7)
    .replace(/(\d{4})(\d)/, '$1-$2');
}

// export
export { formatZipcode };
