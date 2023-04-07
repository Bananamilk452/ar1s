/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: yDin9u6ajgDy3q9tIWcxSS+4Ffgyipyhxow1mZENMoleio2eUwbMcn3gji4JymW61N+okcIkxV8uML1R3QToBg==
 */

/* eslint-disable */
// tslint:disable

import Conversation from './conversation'
import ConversationMember from './conversationMember'

interface Message {
  /**
   * @default nextval('message_author_seq'::regclass)
   */
  author: ConversationMember['id']
  content: string
  /**
   * @default nextval('message_conversation_seq'::regclass)
   */
  conversation: Conversation['id']
  createdat: Date
  /**
   * @default nextval('message_id_seq'::regclass)
   */
  id: number & {readonly __brand?: 'message_id'}
  updatedat: Date
}
export default Message;

interface Message_InsertParameters {
  /**
   * @default nextval('message_author_seq'::regclass)
   */
  author?: ConversationMember['id']
  content: string
  /**
   * @default nextval('message_conversation_seq'::regclass)
   */
  conversation?: Conversation['id']
  createdat: Date
  /**
   * @default nextval('message_id_seq'::regclass)
   */
  id?: number & {readonly __brand?: 'message_id'}
  updatedat: Date
}
export type {Message_InsertParameters}
