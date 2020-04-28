const formatDate = (dateString: string): string => {
  const d = new Date(dateString);
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
    d,
  );

  return `${da}/${mo}/${ye}`;
};

export default formatDate;
