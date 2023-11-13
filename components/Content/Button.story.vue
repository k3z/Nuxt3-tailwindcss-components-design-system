<template>
  <Story
    title="Button"
    :layout="{ type: 'grid', width: 200 }"
  >
    <Variant title="default">
      <ContentButton> Label </ContentButton>
    </Variant>
    <Variant title="Small">
      <ContentButton size="sm"> Label </ContentButton>
    </Variant>
    <Variant title="Large">
      <ContentButton size="lg"> Label </ContentButton>
    </Variant>
    <Variant title="default">
      <ContentButton> Label </ContentButton>
    </Variant>
    <Variant title="Rounded">
      <ContentButton
        :intent="'dark'"
        :rounded="true"
      >
        Label
      </ContentButton>
    </Variant>
    <Variant title="Loading">
      <ContentButton
        :intent="'dark'"
        :rounded="true"
        :loading="true"
      >
        Label
      </ContentButton>
    </Variant>
    <Variant title="Icon">
      <ContentButton
        :intent="'dark'"
        :rounded="true"
        icon="i-heroicons-plus"
      />
    </Variant>
    <Variant title="Icon Left">
      <ContentButton
        :intent="'dark'"
        :rounded="true"
        icon-left="i-heroicons-plus"
      >
        Label
      </ContentButton>
    </Variant>
    <Variant title="Icon Right">
      <ContentButton
        :intent="'dark'"
        :rounded="true"
        icon-right="i-heroicons-arrow-top-right-on-square-solid"
      >
        Label
      </ContentButton>
    </Variant>
    <Variant title="Primary">
      <ContentButton intent="primary">Label</ContentButton>
    </Variant>
    <Variant title="Secondary">
      <ContentButton intent="secondary">Label</ContentButton>
    </Variant>
    <Variant title="Dark">
      <ContentButton intent="dark">Label</ContentButton>
    </Variant>
    <Variant title="Dark Gray">
      <ContentButton intent="dark-gray">Label</ContentButton>
    </Variant>
    <Variant title="White">
      <ContentButton intent="white">Label</ContentButton>
    </Variant>
    <Variant title="Danger">
      <ContentButton intent="danger">Label</ContentButton>
    </Variant>
    <Variant title="Text">
      <ContentButton intent="text">Label</ContentButton>
    </Variant>
    <Variant title="Link">
      <ContentButton
        as="a"
        href="http://vuejs.org"
        >Label</ContentButton
      >
    </Variant>
    <Variant title="Disabled">
      <ContentButton :disabled="true">Label</ContentButton>
    </Variant>
  </Story>
</template>
