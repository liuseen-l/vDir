export type MetaConfig = {
  name: string
  build?: boolean
  external?: string[]
}[]

export const packages: MetaConfig = [
  {
    name: 'core',
    build: true,
    external: [
      '@vuedir/shared',
    ],
  },
  {
    name: 'shared',
    build: true,
  },
]
