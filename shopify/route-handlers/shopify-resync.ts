'use server';

import { NextRequest, NextResponse } from 'next/server';
import { syncAll } from '../sync';
import { parseDatoCMSApiError } from 'next-dato-utils/utils';
import { basicAuth } from 'next-dato-utils/route-handlers';

export default async function resync(request: NextRequest) {
	return basicAuth(request, async (req) => {
		try {
			const now = Date.now();
			await syncAll();
			return NextResponse.json({ success: true, time: Date.now() - now });
		} catch (error) {
			//console.log(JSON.stringify(error))
			console.log(error);
			console.log(parseDatoCMSApiError(error));

			return NextResponse.json({ success: false, error: parseDatoCMSApiError(error) });
		}
	});
}
