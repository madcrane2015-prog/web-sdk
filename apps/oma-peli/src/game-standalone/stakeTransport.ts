import { requestAuthenticate, requestBet, requestEndRound } from 'rgs-requests';
import type { StakeTransport, StakeResponse } from './stakeSession';

export function createStakeTransport(sessionID:string,rgsUrl:string,language:string,mode:string):StakeTransport {
	if(!sessionID||!rgsUrl) throw new Error('Missing Stake launch parameters');
	const connection={sessionID,rgsUrl};
	return {
		authenticate:async()=>await requestAuthenticate({...connection,language}) as StakeResponse,
		play:async(amount,currency)=>await requestBet({...connection,amount,currency,mode}) as StakeResponse,
		endRound:async()=>await requestEndRound(connection) as StakeResponse,
	};
}
