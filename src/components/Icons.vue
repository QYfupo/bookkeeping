<template>

        <svg>
          <use :xlink:href="`#${name}`"></use>
        </svg>

</template>

<script lang="ts">
const importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons',true,/\.svg$/));} catch (error){console.log(error)}

export default {
  props:['name'],
  name:"Icons"
}
</script>

<style scoped lang="scss">

</style>