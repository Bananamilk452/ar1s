## API Report File for "@ar1s/client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import ky from 'ky';

// @public
export class Aris {
    constructor(prefixUrl: string);
    bootstrap(platform: {
        inviteIdentifier: Platform['inviteIdentifier'];
        displayName: Platform['displayName'];
        token: string;
    }, user: {
        username: User['username'];
        password: string;
    }): Promise<void>;
    // (undocumented)
    readonly fetcher: typeof ky;
    getPlatform(invite?: Platform['inviteIdentifier']): Promise<Platform>;
    isBootstrapRequired(): Promise<boolean>;
    // (undocumented)
    readonly prefixUrl: string;
    signIn(username: User['username'], password: string, isTrustedEnvironment: boolean): Promise<boolean>;
    signOut(): Promise<void>;
    sync(): Promise<void>;
    // (undocumented)
    user?: User;
    // (undocumented)
    get userRequired(): User;
}

// Warning: (ae-forgotten-export) The symbol "Context" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export class Collection<T extends Context> {
    // (undocumented)
    delete(index: EnumerableIndex): void;
    // Warning: (ae-forgotten-export) The symbol "EnumerableIndex" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    get(index: EnumerableIndex): T;
    // (undocumented)
    keys(): T[];
    // (undocumented)
    set(entity: T): void;
    // (undocumented)
    values(): T[];
}

// @public
export class Conversation extends Context {
    constructor(context: Aris, conversationRef: ConversationReflection);
    addMember(userId: User['id']): Promise<ConversationMember>;
    // (undocumented)
    readonly context: Aris;
    // (undocumented)
    readonly createdAt: Date;
    createMessage(content: Message['content']): Promise<void>;
    delete(): Promise<void>;
    // (undocumented)
    displayImageUrl: string;
    // (undocumented)
    displayName: string;
    // (undocumented)
    flag: number;
    // (undocumented)
    readonly id: number & {
        __type: 'conversation.id';
    };
    // (undocumented)
    get isOwnedByCurrentUser(): boolean;
    // (undocumented)
    members?: Collection<ConversationMember>;
    // (undocumented)
    get membersRequired(): Collection<ConversationMember>;
    // (undocumented)
    messages?: Series<Message>;
    // (undocumented)
    get messagesRequired(): Series<Message>;
    // (undocumented)
    readonly model: string;
    // (undocumented)
    profile?: ConversationMember;
    // (undocumented)
    get profileRequired(): ConversationMember;
    removeMember(memberId: ConversationMember['id']): Promise<void>;
    sync(): Promise<void>;
    syncMembers(): Promise<void>;
    syncMessages(): Promise<void>;
    // (undocumented)
    readonly systemMessage: string;
    update(params: ConversationReflection): void;
    // (undocumented)
    updatedAt: Date;
}

// @public
export class ConversationMember extends Context {
    constructor(context: Aris, conversation: Conversation, params: ConversationMemberReflection);
    // (undocumented)
    readonly context: Aris;
    // (undocumented)
    readonly conversation: Conversation;
    // (undocumented)
    readonly createdAt: Date;
    delete(): Promise<void>;
    // (undocumented)
    displayAvatarUrl: string;
    // (undocumented)
    displayBio: string;
    // (undocumented)
    displayName: string;
    // (undocumented)
    flag: number;
    // (undocumented)
    readonly id: number & {
        __type: 'conversationMember.id';
    };
    // (undocumented)
    get isThisMemberCurrentUser(): boolean;
    // (undocumented)
    update(params: ConversationMemberReflection): void;
    // (undocumented)
    updatedAt: Date;
}

// @public (undocumented)
export type ConversationMemberReflection = {
    id: ConversationMember['id'];
    flag: ConversationMember['flag'];
    platform: Platform['id'];
    conversation: Conversation['id'];
    user: User['id'];
    displayName: ConversationMember['displayName'];
    displayAvatarUrl: ConversationMember['displayAvatarUrl'];
    displayBio: ConversationMember['displayBio'];
    createdAt: string | ConversationMember['createdAt'];
    updatedAt: string | ConversationMember['updatedAt'];
};

// @public (undocumented)
export type ConversationReflection = {
    id: Conversation['id'];
    flag: Conversation['flag'];
    platform: Platform['id'];
    displayName: Conversation['displayName'];
    displayImageUrl: Conversation['displayImageUrl'];
    model: Conversation['model'];
    systemMessage: Conversation['systemMessage'];
    createdAt: string | Conversation['createdAt'];
    updatedAt: string | Conversation['updatedAt'];
};

// @public
export class Message extends Context {
    constructor(context: Aris, conversation: Conversation, author: ConversationMember, params: MessageReflection);
    // (undocumented)
    readonly author: ConversationMember;
    // (undocumented)
    content: string;
    // (undocumented)
    readonly context: Aris;
    // (undocumented)
    readonly conversation: Conversation;
    // (undocumented)
    readonly createdAt: Date;
    // (undocumented)
    flag: number;
    // (undocumented)
    readonly id: number & {
        __type: 'message.id';
    };
    // (undocumented)
    update(params: MessageReflection): void;
    // (undocumented)
    updatedAt: Date;
}

// @public (undocumented)
export type MessageReflection = {
    id: Message['id'];
    flag: Message['flag'];
    platform: Platform['id'];
    author: ConversationMember['id'];
    conversation: Conversation['id'];
    content: Message['content'];
    createdAt: string | Message['createdAt'];
    updatedAt: string | Message['updatedAt'];
};

// @public (undocumented)
export type Options = {
    fetcher: typeof ky;
};

// @public
export class Platform extends Context {
    constructor(context: Aris, params: PlatformReflection);
    // (undocumented)
    readonly createdAt: Date;
    delete(): Promise<void>;
    // (undocumented)
    displayImageUrl: string;
    // (undocumented)
    displayName: string;
    // (undocumented)
    flag: number;
    // (undocumented)
    readonly id: number & {
        __type: 'platform.id';
    };
    // (undocumented)
    readonly inviteIdentifier: string;
    // (undocumented)
    get isManagedByCurrentUser(): boolean;
    sync(): Promise<void>;
    syncUsers(): Promise<void>;
    update(params: PlatformReflection): void;
    // (undocumented)
    updatedAt: Date;
    // (undocumented)
    users?: Collection<User>;
    // (undocumented)
    get usersRequired(): Collection<User>;
    static validate(params: PlatformReflection): void;
}

// @public (undocumented)
export type PlatformReflection = {
    id: Platform['id'];
    flag: Platform['flag'];
    inviteIdentifier: Platform['inviteIdentifier'];
    displayName: Platform['displayName'];
    displayImageUrl: Platform['displayImageUrl'];
    createdAt: string | Platform['createdAt'];
    updatedAt: string | Platform['updatedAt'];
};

// @public (undocumented)
export class Series<T extends Context> {
    constructor(threshold?: number);
    // (undocumented)
    add(entry: T): boolean;
    // (undocumented)
    arr: T[];
    // (undocumented)
    del(index: EnumerableIndex): boolean;
    // (undocumented)
    get(index: EnumerableIndex): T;
    // (undocumented)
    map: Record<EnumerableIndex, T>;
    // (undocumented)
    pop(): void;
    // (undocumented)
    shift(): void;
    // (undocumented)
    readonly threshold: number;
    // (undocumented)
    values(): T[];
}

// @public
export class User extends Context {
    constructor(context: Aris, userRef: UserReflection, platform: Platform);
    // (undocumented)
    conversations?: Collection<Conversation>;
    // (undocumented)
    get conversationsRequired(): Collection<Conversation>;
    createConversation(model: string, systemMessage: string, displayName: string): Promise<Conversation>;
    // (undocumented)
    readonly createdAt: Date;
    delete(): Promise<void>;
    deleteConversation(conversationId: Conversation['id']): Promise<void>;
    // (undocumented)
    displayAvatarUrl: string;
    // (undocumented)
    displayBio: string;
    // (undocumented)
    displayName: string;
    // (undocumented)
    flag: number;
    // (undocumented)
    readonly id: number & {
        __type: 'user.id';
    };
    // (undocumented)
    readonly platform: Platform;
    // (undocumented)
    sync(): Promise<void>;
    // (undocumented)
    syncConversations(): Promise<void>;
    update(params: UserReflection): void;
    // (undocumented)
    updatedAt: Date;
    // (undocumented)
    readonly username: string;
    static validate(params: UserReflection): void;
}

// @public (undocumented)
export type UserReflection = {
    id: User['id'];
    flag: User['flag'];
    platform: Platform['id'];
    username: User['username'];
    displayName: User['displayName'];
    displayAvatarUrl: User['displayAvatarUrl'];
    displayBio: User['displayBio'];
    createdAt: string | User['createdAt'];
    updatedAt: string | User['updatedAt'];
};

// (No @packageDocumentation comment for this package)

```
