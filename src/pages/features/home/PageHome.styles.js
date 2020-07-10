import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  cardColumn: {
    flex: 1,
    flexBasis: '50%',
    maxWidth: '50%',
    width: '50%',
    padding: 5,
    height: 150,
    textAlign: 'center',
  },
});
