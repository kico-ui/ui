import { ShandcnRegistry } from "./shadcn"
import { TailewindcssRegistry } from "./tailwindcss"

type RegistryType = {
  [key: string]: {
    component: React.LazyExoticComponent<() => React.JSX.Element>
    name: string
    type:
      | "tailwindcss:component"
      | "shadcn:component"
      | "css:component"
      | "ant-design:component"
    registryDependencies: undefined
    files: string[]
  }
}

type ComponentRegistryType = {
  shadcn: RegistryType
  tailwindcss: RegistryType
}

const ComponentRegistry: ComponentRegistryType = {
  shadcn: ShandcnRegistry,
  tailwindcss: TailewindcssRegistry,
}

export { type ComponentRegistryType, ComponentRegistry }
