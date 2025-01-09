import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
export const renderIcon = (icon: Component) => {
	return () => h(NIcon, null, { default: () => h(icon) })
}