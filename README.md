
> curl -F "url=https://chatbot-ia-senac.herokuapp.com/chatbot/message" https://api.telegram.org/bot913045886:AAEM3ij7tUI5Qe_j7ZYpcU1TJPaDvDflh60/setWebhook

## Modelo de dados
```sql
CREATE TABLE tb_restaurantes (
  address text,
  categories text,
  city text,
  claimed text,
  country text,
  cuisines text,
  dateOpened text,
  dateUpdated text,
  descriptions text,
  facebookPageURL text,
  features text,
  hours text,
  images text,
  isClosed text,
  key text,
  lat double precision,
  languages text,
  long double precision,
  menus text,
  menuURL text,
  name text,
  paymentTypes text,
  phones text,
  postalCode text,
  priceRange text,
  province text,
  sic text,
  twitter text,
  websites text
)
```