export default defineEventHandler(async (event) => {
  return [
    { id: 1, text: 'Hello, World!' },
    { id: 2, text: 'Lorem ipsum' },
    { id: 3, text: 'Dolor sit amet' },
    { id: 4, text: 'Consectetur adipiscing elit' },
  ]
})