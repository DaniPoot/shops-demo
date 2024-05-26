export const getShopsSchema = {
  query: {
    type: 'object',
    properties: {
      limit: { type: 'number' },
      page: { type: 'number' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            required: ['_id', 'name', 'email', 'phone', 'address', 'description', 'website', 'createdAt'],
            properties: {
              _id: { type: 'string' },
              name: { type: 'string', maxLength: 255 },
              email: { type: 'string', maxLength: 255 },
              phone: { type: 'string', maxLength: 10 },
              address: {
                type: 'object',
                properties: {
                  street: { type: 'string', maxLength: 255 },
                  city: { type: 'string', maxLength: 255 },
                  state: { type: 'string', maxLength: 255 },
                  postalCode: { type: 'string', maxLength: 255 },
                  country: { type: 'string', maxLength: 255 },
                  coordinates: {
                    type: 'object',
                    required: ['lat', 'lng'],
                    properties: {
                      lat: { type: 'number' },
                      lng: { type: 'number' }
                    }
                  }
                }
              },
              description: { type: ['string', 'null'], maxLength: 255 },
              website: { type: ['string', 'null'], maxLength: 255 },
              createdAt: { type: 'string', format: 'date-time' }
            }
          }
        },
        page: { type: 'number' },
        limit: { type: 'number' },
        total: { type: 'number' }
      }

    }
  }
}

export const insertShopSchema = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string', maxLength: 255 },
      email: { type: 'string', maxLength: 255 },
      phone: { type: 'string', maxLength: 10 },
      address: {
        type: 'object',
        required: ['street', 'city', 'state', 'postalCode', 'country', 'coordinates'],
        properties: {
          street: { type: 'string', maxLength: 255 },
          city: { type: 'string', maxLength: 255 },
          state: { type: 'string', maxLength: 255 },
          postalCode: { type: 'string', maxLength: 255 },
          country: { type: 'string', maxLength: 255 },
          coordinates: {
            type: 'object',
            required: ['lat', 'lng'],
            properties: {
              lat: { type: 'number' },
              lng: { type: 'number' }
            }
          }
        }
      },
      description: { type: ['string', 'null'], maxLength: 255 },
      website: { type: ['string', 'null'], maxLength: 255 },
      createdAt: { type: 'string', format: 'date-time' }
    }
  },
  response: {
    200: {
      type: 'object',
      required: ['_id', 'name', 'email', 'phone', 'address', 'description', 'website', 'createdAt'],
      properties: {
        _id: { type: 'string' },
        name: { type: 'string', maxLength: 255 },
        email: { type: 'string', maxLength: 255 },
        phone: { type: 'string', maxLength: 10 },
        address: {
          type: 'object',
          properties: {
            street: { type: 'string', maxLength: 255 },
            city: { type: 'string', maxLength: 255 },
            state: { type: 'string', maxLength: 255 },
            postalCode: { type: 'string', maxLength: 255 },
            country: { type: 'string', maxLength: 255 },
            coordinates: {
              type: 'object',
              required: ['lat', 'lng'],
              properties: {
                lat: { type: 'number' },
                lng: { type: 'number' }
              }
            }
          }
        },
        description: { type: ['string', 'null'], maxLength: 255 },
        website: { type: ['string', 'null'], maxLength: 255 },
        createdAt: { type: 'string', format: 'date-time' }
      }
    }
  }
}

export const updateShopSchema = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string', maxLength: 255 },
      email: { type: 'string', maxLength: 255 },
      phone: { type: 'string', maxLength: 10 },
      address: {
        type: 'object',
        required: ['street', 'city', 'state', 'postalCode', 'country', 'coordinates'],
        properties: {
          street: { type: 'string', maxLength: 255 },
          city: { type: 'string', maxLength: 255 },
          state: { type: 'string', maxLength: 255 },
          postalCode: { type: 'string', maxLength: 255 },
          country: { type: 'string', maxLength: 255 },
          coordinates: {
            type: 'object',
            required: ['lat', 'lng'],
            properties: {
              lat: { type: 'number' },
              lng: { type: 'number' }
            }
          }
        }
      },
      website: { type: ['string', 'null'], maxLength: 255 },
      description: { type: ['null', 'string'], maxLength: 255 },
      createdAt: { type: 'string', format: 'date-time' }
    }
  },
  params: {
    type: 'object',
    required: ['storeId'],
    properties: {
      storeId: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      required: ['_id', 'name', 'email', 'phone', 'address', 'description', 'website', 'createdAt'],
      properties: {
        _id: { type: 'string' },
        name: { type: 'string', maxLength: 255 },
        email: { type: 'string', maxLength: 255 },
        phone: { type: 'string', maxLength: 10 },
        address: {
          type: 'object',
          properties: {
            street: { type: 'string', maxLength: 255 },
            city: { type: 'string', maxLength: 255 },
            state: { type: 'string', maxLength: 255 },
            postalCode: { type: 'string', maxLength: 255 },
            country: { type: 'string', maxLength: 255 },
            coordinates: {
              type: 'object',
              required: ['lat', 'lng'],
              properties: {
                lat: { type: 'number' },
                lng: { type: 'number' }
              }
            }
          }
        },
        description: { type: ['string', 'null'], maxLength: 255 },
        website: { type: ['string', 'null'], maxLength: 255 },
        createdAt: { type: 'string', format: 'date-time' }
      }
    }
  }
}

export const deleteShopSchema = {
  params: {
    type: 'object',
    required: ['storeId'],
    properties: {
      storeId: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      required: ['ok'],
      properties: {
        ok: { type: 'boolean' },
        message: { type: 'string' }
      }
    }
  }
}

export const getByIdShema = {
  params: {
    type: 'object',
    required: ['storeId'],
    properties: {
      storeId: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      required: ['_id', 'name', 'email', 'phone', 'address', 'description', 'website', 'createdAt'],
      properties: {
        _id: { type: 'string' },
        name: { type: 'string', maxLength: 255 },
        email: { type: 'string', maxLength: 255 },
        phone: { type: 'string', maxLength: 10 },
        address: {
          type: 'object',
          properties: {
            street: { type: 'string', maxLength: 255 },
            city: { type: 'string', maxLength: 255 },
            state: { type: 'string', maxLength: 255 },
            postalCode: { type: 'string', maxLength: 255 },
            country: { type: 'string', maxLength: 255 },
            coordinates: {
              type: 'object',
              required: ['lat', 'lng'],
              properties: {
                lat: { type: 'number' },
                lng: { type: 'number' }
              }
            }
          }
        },
        description: { type: ['string', 'null'], maxLength: 255 },
        website: { type: ['string', 'null'], maxLength: 255 },
        createdAt: { type: 'string', format: 'date-time' }
      }
    }
  }
}
