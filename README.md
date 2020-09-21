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
| @inputChanged | Function | When input is changed this event gets fired. The consumers of the vue-simple-complete component can listen to this event and get the entered or selected value |

### Example-1: With items of Object type
```
<vue-simple-complete
        :items="items"
        :objectMatchkey="objectMatchkey"
        :template="template"
        @inputChanged="onInputChanged">
</vue-simple-complete>

```

```

<script>
  import VueSimpleComplete from "vue-simple-complete";

  export default {
    name: 'app',
    components: {
      "vue-simple-complete": VueSimpleComplete
    },
    data() {
        return {
            items: [
                { Id: 1, Name: "Amsterdam" },
                { Id: 2, Name: "Berlin" },
                { Id: 3, Name: "London" },
                { Id: 4, Name: "Mumbai" }
            ],
            objectMatchkey: "Name",
            template: {
                keys: ["Id", "Name"],
                separator: ", "
            },
            changedInput: ""
        };
    },
    methods: {
        onInputChanged(value) {
            this.changedInput = value;
        }
    }
  };
</script>

```

### Example-2: With items of string type
```
<vue-simple-complete
        :items="items"
        @inputChanged="onInputChanged">
</vue-simple-complete>

```

```

<script>
  import VueSimpleComplete from "vue-simple-complete";

  export default {
    name: 'app',
    components: {
      "vue-simple-complete": VueSimpleComplete
    },
    data() {
        return {
            items: [
                "Amsterdam",
                "Berlin",
                "London",
                "Mumbai"
            ],
            changedInput: ""
        };
    },
    methods: {
        onInputChanged(value) {
            this.changedInput = value;
        }
    }
  };
</script>

```

### Note:
There is a known issue where you will see the following error when you import the component

```
Could not find a declaration file for module 'vue-simple-complete'.
Try `npm install @types/vue-simple-complete` if it exists or add a new declaration (.d.ts) file containing `declare module 'vue-simple-complete';`

```

As a temporary fix, please add a type declaration file in the src folder of your application, the file name can be anything with following extension
(.d.ts) and add the following line to the file

```
declare module "vue-simple-complete";

```

This will be fixed in the upcoming release
