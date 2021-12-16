export function handleUndefinedData(data) {
  // Checks that a start date exists and sets on if
  if (data.dates === undefined) {
    data.dates = { start: { dateTime: new Date() } };
  }

  // Checks that a title exists
  if (data.title == undefined) {
    data.title = 'TBA';
  }

  // Checks that the event has a venue and location of the venue specified
  if (data._embedded == undefined) {
    data._embedded = { venues: [{ name: 'TBA', city: { name: 'TBA' } }] };
  }

  // Checks if there is a details/notes field
  if (data.pleaseNote == undefined) {
    data.pleaseNote = '';
  }

  // Check if there is an image field.
  if (data.images == null) {
    data.images = [{ url: '' }, { url: '' }];
  }

  // Checks if a purchasing tickets field is available and his will return a 404 for Ticket Master
  if (data.url == null) {
    data.url = 'https://www.ticketmaster.com/events/';
  }

  //   Checks if there is a name of the event
  if (data.name == null) {
    data.name = 'TBA';
  }

  return data;
}
