/*
 * Scoreboard component using useReducer to manage state for multiple players.
 *
 * initialScore: The starting state — an array of two players (John and Jane), both with score 0.
 *
 * reducer: A pure function that takes the current state and an action, and returns the next state.
 *   - INCREASE: finds the player matching action.id and returns a new object with score + 1.
 *     All other players are returned unchanged.
 *   - default: returns the current state as-is (required safety net).
 *
 * Score component:
 *   - useReducer(reducer, initialScore) initializes state and provides score (current state)
 *     and dispatch (function to send actions).
 *   - handleIncrease dispatches an INCREASE action with the player's id.
 *   - Renders a button (labeled with the player's name) next to their current score.
 *     Clicking the button increments that player's score.
 *
 * useReducer is preferred over useState here because the state is an array of objects
 * and the update logic is complex enough to benefit from being centralized in the reducer.
 */
import { useReducer } from 'react';

const initialScore = [{
  id: 1,
  score: 0,
  name: 'John'
  }, {
    id: 2,
    score: 0,
    name: 'Jane'
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state.map((player) => {
        if (player.id === action.id) {
          return {...player, score: player.score + 1 };
        } else {
          return player;
        }
      })
    default:
      return state;
  };
};

export function Score() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={player.name}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  )
}
