const axios = require('axios');


class KeksikVKApi {
	constructor(group, token) {
		this.options = {
			v: 1,
			group: group,
			token: token,
		};
		this.url = 'https://api.keksik.io/';
	}


	async query(method, data = {}) {
		try {
			const result = await axios.post(`${this.url}${method}`, {
				...this.options,
				...data,
			});

			return result.data;
		} catch (e) {
			return new Error('Error sending request:\n' + e);
		}
	}


	async donatesGet(data = {}) {
		const result = await this.query('donates/get', data);

		return result;
	}

	async donatesGetLast(last = undefined) {
		const result = await this.query('donates/get-last', {
			...(last ? { last: last } : {}),
		});

		return result;
	}

	async donatesChangeStatus(id, status) {
		const result = await this.query('donates/get-last', {
			id: id,
			status: status,
		});

		return result;
	}

	async donatesAnswer(id, answer) {
		const result = await this.query('donates/answer', {
			id: id,
			answer: answer,
		});

		return result;
	}

	async donatesChangeRewardStatus(id, status) {
		const result = await this.query('donates/change-reward-status', {
			id: id,
			status: status,
		});

		return result;
	}


	async campaignsGet(ids = undefined) {
		const result = await this.query('campaigns/get', {
			...(ids ? { ids: ids } : {}),
		});

		return result;
	}

	async campaignsGetActive() {
		const result = await this.query('campaigns/get-active');

		return result;
	}

	async campaignsGetRewards(campaign) {
		const result = await this.query('campaigns/get-rewards', {
			campaign: campaign,
		});

		return result;
	}

	async campaignsChange(data = {}) {
		const result = await this.query('campaigns/change', data);

		return result;
	}

	async campaignsChangeReward(data = {}) {
		const result = await this.query('campaigns/change-reward', data);

		return result;
	}


	async paymentsGet(ids = undefined) {
		const result = await this.query('payments/get', {
			...(ids ? { ids: ids } : {}),
		});

		return result;
	}

	async paymentsCreate(data = {}) {
		const result = await this.query('payments/create', data);

		return result;
	}


	async balance() {
		const result = await this.query('balance');

		return result;
	}
}


module.exports = KeksikVKApi;
