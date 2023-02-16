import { defineNuxtPlugin } from '#app'
import { EVENT_TYPES } from './eventTypes'

export interface Events {
  all: Map<EVENT_TYPES, Function[]>
  on: (type: EVENT_TYPES, handler: Function) => void
  off: (type: EVENT_TYPES, handler: Function) => void
  emit: (type: EVENT_TYPES, payload: any) => void
}

const all = new Map()

const events: Events = {
  all,
  on(type, handler) {
    const handlers = all!.get(type)
    if (handlers) handlers.push(handler)
    else all!.set(type, [handler])
  },
  off(type, handler) {
    const handlers = all!.get(type)
    if (!handlers) return
    if (handler) handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    else all!.set(type, [])
  },
  emit(type, evt) {
    let handlers = all!.get(type)
    if (handlers) handlers.slice().map((handler: Function) => handler(evt!))
    handlers = all!.get('*')
    if (handlers) handlers.slice().map((handler: Function) => handler(type, evt!))
  }
}

export default defineNuxtPlugin(() => ({ provide: { events } }))
