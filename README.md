# vue-simple-complete
https://github.com/rohitkvv/vue-simple-complete/releases/tag/1.0.5

# Description
A simple autocomplete input built using Vue & Typescript

## Project setup
```
yarn add vue-simple-complete

npm i vue-simple-complete

```

```

<script>
  import VueSimpleComplete from "vue-simple-complete";

  export default {
    name: 'app',
    data() {
    },
    components: {
      VueSimpleComplete
    },
  };
</script>

```

### Wiki
| Props | Type | Description |
|-------|------|-------------|
| :items | Array | This contains data for the auto-complete, this can either be an array of string or an array of custom objects|
| :objectMatchkey | String | This is required if the items is of type object array. The objectMatchKey then becomes the key that is used within the match function |
| :template | Object | This is required if the items is of type object array. The template is then used to display the items as per the defined template. If the template is not defined then ObjectMatchKey will be used to form the items display |

| Function | Type | Description |
|----------|------|-------------|
| v-on:inputChanged | Function | When input is changed this event gets fired. The consumers of the vue-simple-complete component can listen to this event and get the entered or selected value |

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
