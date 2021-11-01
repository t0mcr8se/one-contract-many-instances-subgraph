// import { BigInt } from "@graphprotocol/graph-ts"
import { Thanks } from "../generated/POC1/POC"
import { Received } from "../generated/schema"

export function handleThanks(event: Thanks): void {
  let entity = Received.load(event.transaction.hash.toHex())

  if (!entity) {
    entity = new Received(event.transaction.hash.toHex())
  }
  entity.receiver = event.address
  entity.sender = event.params._address
  entity.amount = event.params._amount
  entity.save()

  // let contract = Contract.bind(event.address)
}
