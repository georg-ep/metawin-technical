import { describe, test } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';
import IndexPage from '../pages/index.vue';

describe('IndexPage', async () => {
  await setup();

  test('renders correctly', async () => {
    const mockUser = { "userId": 2, "displayName": "Skronk", "avatarUrl": "https://content.dev.platform.metawin.com/avatars/template/default.png", "isPlayer": false, "prize": { "id": 4251, "type": "StakedCash", "currencyCode": "ETH", "amount": "0.001", "quantity": 1, "rank": 2, "staked": true, "reward": false }, "state": "Named", "externalId": "0xd1aa4ad278caf871e3ba4433fd0bdeca0428e79e9e608eca1fed0987a84298f5", "date": "2023-06-02T11:02:43.224Z", "sweepstakeId": 2385, "sweepstakeName": "Apepe #7230 (Multi NFT)", "sweepstakeType": "Blockchain", "sweepstakePresentationType": "Competition", "sweepstakeMechanism": "Standard", "sweepstakeImageUrl": "https://i.seadn.io/gae/h8ApflBd3OWsf1YAl4MN01ulrbDSG4ZP-UOIHBJQMXkaDjufLZ69bjr0PWHMnwTXkl1EhugEwW2ojuWPookb0WE_gwYNVdW0uSeitw?auto=format&w=1000", "sweepstakePrizeCount": 3 }
    
    // Mock the API response to ensure that the user is included in the response
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve([
        mockUser,
      ]),
    });

    const { getByText, queryByTestId } = await mount(IndexPage);

    // Assert that the component is rendered
    expect(queryByTestId('spinner')).toBeNull();

    // Assert that the winners are rendered
    expect(getByText('Skronk')).toBeInTheDocument();
    expect(getByText('H4RR150N')).toBeInTheDocument();

    // Cleanup the mock
    window.fetch.mockRestore();
  });
});