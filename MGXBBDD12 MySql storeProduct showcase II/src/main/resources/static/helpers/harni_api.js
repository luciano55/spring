const NAME = "harnina",
DOMAIN = `https://${NAME}.com`,
API_HARNINA = `http://localhost:8085/storerest/`,
API_HARNINA_PAGE = `${API_HARNINA}?page=`,
PRODUCT = `${API_HARNINA}/?_embed`,
SEARCH = `${API_HARNINA}/search?_embed&search=`;

export default {
  NAME, 
  DOMAIN,
  API_HARNINA,
  PRODUCT,
  SEARCH
}