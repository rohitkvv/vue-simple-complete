# vue-simple-complete
https://github.com/rohitkvv/vue-simple-complete/releases/tag/1.1.3

# Description
A simple autocomplete input 🔨 built using [Vue.JS](vue) & [Typescript](typescript)

[![DeepScan grade](https://deepscan.io/api/teams/11042/projects/13965/branches/248867/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11042&pid=13965&bid=248867) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/rohitkvv/vue-simple-complete.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/rohitkvv/vue-simple-complete/context:javascript) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/rohitkvv/vue-simple-complete)

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
|      Props      |   Type    |  Description  |
|-----------------|-----------|---------------|
|      :items     |    Array  | This contains data for the auto-complete, this can either be an array of string or an array of custom objects|
| :objectMatchkey |   String  | This is required if the items is of type object array. The objectMatchKey then becomes the key that is used within the match function |
|    :template    |   Object  | This is required if the items is of type object array. The template is then used to display the items as per the defined template. If the template is not defined then ObjectMatchKey will be used to form the items display |


|      Function    |    Type   |  Description  |
|------------------|-----------|---------------|
|  @inputChanged   |  Function | When input is changed this event gets fired. The consumers of the vue-simple-complete component can listen to this event and get the entered or selected value |

**📄 Additional Info**:
- The component comes with a `basic styling`, and the items panel usually takes the full width of the container it's placed in. To contain it's width, it can be wrapped within a `div` with custom width. 
- `Up` & `Down` keys can be used to go over the items in the list.
- `Down` key can be used to open the items panel, when the panel is collapsed. 
- `Esc` key will clear out the selected value when the focus is on the input

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

![ObjectImage1](./readme-assets/object-ex-1.png)
![ObjectImage2](./readme-assets/object-ex-2.png)
![ObjectImage3](./readme-assets/object-ex-3.png)

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

![StringImage1](./readme-assets/string-ex-1.png)
![StringImage2](./readme-assets/string-ex-2.png)
![StringImage3](./readme-assets/string-ex-3.png)

### Note:
There is a known issue where you will see the following error when you import the component into a TypeScript project

```
Could not find a declaration file for module 'vue-simple-complete'.
Try `npm install @types/vue-simple-complete` if it exists or add a new declaration (.d.ts) file containing `declare module 'vue-simple-complete';`

```

As a temporary solution, please edit your TypeScript Config file (tsconfig.json) and add a new key value pair, as -

```

"noImplicitAny": false

```
