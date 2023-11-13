<script setup>
import { cva } from 'class-variance-authority';

const props = defineProps({
  iconLeft: String,
  iconRight: String,
  icon: String,
  loading: Boolean,
  disabled: Boolean,
  rounded: { type: Boolean, default: false },
  as: {
    type: [String, Object],
    default: 'button',
  },
  intent: {
    type: String,
    validator: (val) =>
      [
        'primary',
        'secondary',
        'dark',
        'dark-gray',
        'white',
        'danger',
        'text',
      ].includes(val),
    default: 'dark',
  },
  size: {
    type: String,
    validator: (val) => ['sm', 'base', 'lg'].includes(val),
    default: 'base',
  },
});

const buttonClass = computed(() => {
  return cva('inline-flex items-center justify-center font-medium', {
    variants: {
      intent: {
        primary: 'bg-indigo-500 text-white hover:bg-indigo-700',
        secondary: 'bg-rose-500 text-white hover:bg-rose-700',
        dark: 'bg-black text-white hover:bg-gray-800',
        'dark-gray': 'bg-gray-600 text-white hover:bg-gray-800',
        danger: 'bg-orange-600 text-white hover:bg-orange-700',
        info: 'bg-blue-400 text-white hover:bg-blue-700',
        white: 'text-gray-700 border border-gray-800 bg-white hover:bg-black/5',
        text: 'text-dark hover:transparent',
      },
      size: {
        sm: 'text-xs min-h-[24px] px-1.5 py-0.5',
        base: 'text-sm min-h-[28px] px-2 py-0.5',
        lg: 'min-h-[32px] px-3 py-0.5',
      },
      disabled: {
        true: '!bg-gray-100 !text-gray-400 cursor-not-allowed',
      },
      rounded: {
        true: 'rounded',
      },
    },
  })({
    intent: props.intent,
    size: props.size,
    disabled: props.disabled,
    rounded: props.rounded,
  });
});

const iconClass = computed(() => {
  return cva('', {
    variants: {
      size: {
        sm: 'h-3 w-3',
        base: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
  })({
    size: props.size,
  });
});
</script>

<template>
  <component
    :is="props.as"
    :disabled="props.disabled"
    :class="buttonClass"
  >
    <svg
      class="absolute h-5 w-5 animate-spin"
      v-if="props.loading === true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <span
      v-if="props.iconLeft || (props.iconLeft && props.loading)"
      :class="['mr-2', iconClass, props.loading && 'invisible', props.iconLeft]"
    />

    <span
      v-if="props.icon || (props.icon && props.loading)"
      :class="[iconClass, props.loading && 'invisible', props.icon]"
    />
    <span :class="[props.loading && 'invisible']">
      <slot />
    </span>
    <span
      v-if="props.iconRight || (props.iconRight && props.loading)"
      :class="[
        'ml-2',
        iconClass,
        props.loading && 'invisible',
        props.iconRight,
      ]"
    />
  </component>
</template>
