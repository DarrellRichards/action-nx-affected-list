export interface GetNxAffectedProps {
  base?: string
  head?: string
  type: 'app' | 'lib'
  target: string
  workspace: string
}

export interface ExecuteNxCommandProps {
  commands: string[]
  workspace: string
}
