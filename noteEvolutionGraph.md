# Version minimale

```yaml
openapi: 3.0.2
info:
    version: 1.0.0
    title: The famous Roller Derby API
    contact:
      email: contact@alexisjanvier.dev
security: []
tags:
  - name: my tag
paths: {}
components:
    securitySchemes: {}
    schemas: {}
    parameters: {}
```

# Description de l'API

```yaml
info:
    version: 1.0.0
    title: The Famous Roller Derby API - FRDA
    description: Trouver toutes les informations sur les équipes et les matchs de Roller Derby en Europe.
    termsOfService: https://roller-derby.io/api/terms/
    contact:
        name: FRDA Support
        url: https://roller-derby.io/api/support
        email: api@roller-derby.io
    license:
        name: GNU GPLv3
        url: https://github.com/CaenCamp/jobs-caen-camp/blob/master/LICENSE
```

# Objet schema basic

```yaml
---
Player:
  description: "Un.e joueur.euse de Roller Derby"
  type: object
  properties:
    id:
      type: string
    name:
      type: string
    number:
      type: integer
    picture:
      type: string
    more:
      type: array
      items:
        type: object
        properties:
          answer:
            type: string
          question:
            type: string
```

# Objet Schema avec Validation
Lien avec Json Schema

```yaml
---
Player:
  description: "Un.e joueur.euse de Roller Derby"
  type: object
  properties:
    id:
      type: string
      readOnly: true
    name:
      type: string
      minLength: 3
      maxLength: 50
    number:
      type: integer
      maximum: 9999
      format: int32
    picture:
      type: string
      nullable: true
    more:
      type: array
      minItems: 0
      maxItems: 5
      items:
        type: object
        properties:
          question:
            type: string
          answer:
            type: string
            nullable: true
  required:
    - id
    - name
    - number
    - picture
```

# Split object with reference

```yaml
---
Player:
  description: "Un.e joueur.euse de Roller Derby"
  type: object
  properties:
    id:
      type: string
      readOnly: true
    name:
      type: string
      minLength: 3
      maxLength: 50
    number:
      type: integer
      maximum: 9999
      format: int32
    picture:
      type: string
      nullable: true
    more:
      type: array
      minItems: 0
      maxItems: 5
      items:
        $ref: "#/PlayerMoreItem"
  required:
    - id
    - name
    - number
    - picture

PlayerMoreItem:
  type: object
  properties:
    question:
      type: string
      minLength: 20
      maxLength: 999
    answer:
      type: string
      nullable: true
  required:
    - question
```





# Notes en vrac conf

Une fois les schema présenté

Tooling :

- linting ecriture
- editeur
- génération de la doc
- approche code first (mais je préfère Contrat first)
- Validation live
- Generation des tests
- serveur de mock
- generation de clients et de serveur
- portail de développeur, exemple ARTE !

Pour le conclusion, verbeux, contraignant car hyper automatisable, evolutif rapprochement JSON Scema.
Mais diablement efficace et approche schema first vraiment chouette. Tooling fichtrement efficace pour une bonne Experience (cf octo)

Mes paroisses :
 - generation d'admin : react-admin (et Api Plateform)
 - coding caen camp



		parameters:
		- name: filter
			in: query
			description: Filters to apply to query. It's a stringified json object, with key/value filter separated by comma
			required: false
			explode: true
			schema:
				type: string
			example: '{"number":75,"name":"Vit Ô Bar"}'
		- name: sort
			in: query
			description: Sort to apply to query. A stringified array with [sortProp, sortDirection]
			required: false
			explode: true
			schema:
				type: string
			example: '["id","ASC"]'
		- name: pagination
			in: query
			description: Pagination parameters. A stringified array with [perPage, currentPage]
			required: false
			explode: true
			schema:
				type: string
			example: "[10,3]"
