<template>
    <div>
        <h1>Vee validate</h1>
        <ValidateExample />
    </div>
</template>

<script>
import ValidateExample from './components/ValidateExample';

export default {
    name: 'App',
    compatConfig: {
        MODE: 3,
    },
    components: {
        ValidateExample,
    },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
