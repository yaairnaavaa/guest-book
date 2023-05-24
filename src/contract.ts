import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { POINT_ONE, PostedMessage } from './model'

// Decorador para generar código y que sea un contrato NEAR válido y exponer las funciones previstas para poder llamarlas externamente.
@NearBindgen({})
class GuestBook {
  // Vector donde almacenaremos todos los mensajes
  messages: Vector<PostedMessage> = new Vector<PostedMessage>("m");

  @call({ payableFunction: true })
  add_message({ text }: { text: string }) {
    // Si se adjunta 0.1 NEAR o más, será un mensaje premium
    const premium = near.attachedDeposit() >= BigInt(POINT_ONE);

    // Recuperamos la cuenta que firma la transacción
    const sender = near.predecessorAccountId();

    // Creamos una constante con sus valores
    const message: PostedMessage = { premium, sender, text };

    // Agregamos el mensaje al vector
    this.messages.push(message);
  }

  @view({})
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): PostedMessage[] {
    // Recuperamos los mensajes en el segmente solicitado
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { 
    // Recuperamos el total de mensajes
    return this.messages.length 
  }
}
