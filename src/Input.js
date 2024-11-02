import {
	ERROR_MESSAGE,
	LOTTO_MAX_MONEY,
	LOTTO_MONEY,
	PROMPT,
} from "./constant.js";
import { printOutput, userInput } from "./missionUtils.js";

class Input {
	async getLottoMoney() {
		while (true) {
			try {
				const MONEY = await userInput(PROMPT.LOTTO_BUY);
				await this.validateLottoMoney(MONEY);
				return MONEY;
			} catch (error) {
				printOutput(error.message);
			}
		}
	}

	async validateLottoMoney(money) {
		const INPUT_NUMBER = parseInt(money, 10);

		if (INPUT_NUMBER % LOTTO_MONEY) {
			throw new Error(ERROR_MESSAGE.WRONG_UNIT);
		}

		if (Number.isNaN(INPUT_NUMBER)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}

		if (INPUT_NUMBER > LOTTO_MAX_MONEY) {
			throw new Error(ERROR_MESSAGE.PASSED_BUY_LIMIT);
		}
	}

	async getWinningNumber() {
		while (true) {
			try {
				const WINNING_NUMBER = await userInput(PROMPT.LOTTO_WINNING_NUMBER);
				await this.validateWinningNumber(WINNING_NUMBER);
				return WINNING_NUMBER;
			} catch (error) {
				printOutput(error.message);
			}
		}
	}

	async validateWinningNumber(winningNumber) {
		const INPUT_WINNING = winningNumber.split(",");
		const validPattern = /^[0-9,]+$/;

		if (!validPattern.test(winningNumber)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}

		if (INPUT_WINNING.length !== 6) {
			throw new Error(ERROR_MESSAGE.WRONG_WINNING_DIGIT);
		}

		if (INPUT_WINNING.some((number) => number < 1 || number > 45)) {
			throw new Error(ERROR_MESSAGE.PASSED_WINNING_RANGE);
		}
	}

	async getBonusNumber(winningNumber) {
		while (true) {
			try {
				const BONUS_NUMBER = await userInput(PROMPT.LOTTO_BONUS_NUMBER);
				await this.validateBonusNumber(winningNumber, BONUS_NUMBER);
				return BONUS_NUMBER;
			} catch (error) {
				printOutput(error.message);
			}
		}
	}

	async validateBonusNumber(winningNumber, bonusNumber) {
		const INPUT_WINNING = parseInt(bonusNumber, 10);
		const isDuplicate = winningNumber.includes(bonusNumber);

		if (INPUT_WINNING < 1 || INPUT_WINNING > 45) {
			throw new Error(ERROR_MESSAGE.PASSED_BONUS_RANGE);
		}

		if (isDuplicate) {
			throw new Error(ERROR_MESSAGE.WRONG_DUPLICATE);
		}
	}
}

export default Input;
