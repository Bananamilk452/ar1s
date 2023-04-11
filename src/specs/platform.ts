import {type Transaction} from '@databases/pg';
import {TypeSystem} from '@sinclair/typebox/system';
import {addFlag} from '../modules/bitwise.js';
import {db, isExist, models} from '../modules/database/index.js';
import {type Platform_InsertParameters} from '../modules/database/schema/platform.js';
import {ValidationErrorCodes, useValidationError} from '../modules/error.js';
import {UserFlags, createUser, type UserInsertParams} from './user.js';

export enum PlatformFlags {
	Default = 0,
	IsDeactivated,
	IsSignUpDisabled,
	IsGroupConversationDisabled,
}

export enum PlatformFormats {
	InviteIdentifier = 'ar1s.platform.inviteIdentifier',
	DisplayName = 'ar1s.platform.displayName',
}

export const formatInviteIdentifier = (value: string) => (
	!/[^a-zA-Z0-9]/.test(value)
	&& value.length >= 4
	&& value.length <= 24
);

// eslint-disable-next-line new-cap
TypeSystem.Format(PlatformFormats.InviteIdentifier, formatInviteIdentifier);

export const formatDisplayName = (value: string) => (
	value.length >= 4
	&& value.length <= 24
);

// eslint-disable-next-line new-cap
TypeSystem.Format(PlatformFormats.DisplayName, formatDisplayName);

export const getDefaultPlatform = async (t: Transaction) => {
	const flag = addFlag(0, PlatformFlags.Default);

	return models.platform(t)
		.find(db.sql`flag & ${flag} = ${flag}`)
		.select('id', 'flag', 'displayName', 'displayImageUrl')
		.one();
};

export const getPlatformByInvite = async (t: Transaction, inviteIdentifier: string) => models.platform(t)
	.find({inviteIdentifier})
	.select('id', 'flag', 'displayName', 'displayImageUrl')
	.one();

export const createPlatform = async (t: Transaction, platformParams: Pick<Platform_InsertParameters, 'inviteIdentifier' | 'displayName' | 'displayImageUrl' | 'token'>, managerUserParams: Omit<UserInsertParams, 'platform'>, makePlatformDefault: boolean) => {
	const defaultFlag = addFlag(0, PlatformFlags.Default);

	if (makePlatformDefault && await isExist(t, 'platform', 'flag', defaultFlag)) {
		throw useValidationError(ValidationErrorCodes.PlatformDefaultShouldBeUnique);
	}

	const now = new Date();

	const [platform] = await models.platform(t).insert({
		flag: defaultFlag,
		...platformParams,
		createdAt: now,
		updatedAt: now,
	});

	managerUserParams.flag = addFlag(managerUserParams.flag, UserFlags.PlatformManager);

	await createUser(t, {
		...managerUserParams,
		platform: platform.id,
	});

	return platform;
};
