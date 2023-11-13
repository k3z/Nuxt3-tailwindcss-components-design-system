<template>
  <Story
    title="Hello"
    :layout="{ type: 'grid', width: 200 }"
  >
    <Variant title="Default"> <HelloWorld /> </Variant>
    <Variant title="Alternate"> <HelloWorld msg="Hello Again" /> </Variant>
  </Story>
</template>
