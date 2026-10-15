export function getLaunchMode(search: string): 'demo' | 'stake' {
	const params=new URLSearchParams(search);
	const session=params.get('sessionID'),server=params.get('rgs_url');
	if(params.get('mode')==='stake'||session||server) {
		if(!session||!server) throw new Error('Incomplete Stake launch parameters');
		return 'stake';
	}
	return 'demo';
}
