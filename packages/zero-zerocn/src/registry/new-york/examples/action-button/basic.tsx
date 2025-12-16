import { ActionButton } from "@/registry/new-york/items/action-button/components/action-button"

const serverAction = async () => {
  // Simulate a server action
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { error: false }
}

export function BasicActionButton() {
  return (
    <ActionButton action={serverAction} requireAreYouSure>
      Do action
    </ActionButton>
  )
}
