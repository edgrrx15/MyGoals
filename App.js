import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalInput from './components/Goalinput';
import GoalItem from './components/GoalItem';
import { useState } from 'react';

export default function App() {

  const [goals, setGoals] = useState([])

  function handleAddGoal(enteredGoalText){
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
    console.log('goals', goals)
    console.log('handleAddGoal')
  }

  function handleDeleteGoal(id){
    console.log('DELETE')
    const deleteGoal = goals.filter((goal) => {return goal.key !== id})
    setGoals(deleteGoal)
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleAddGoal}/>
      <View style={goalsContainer}>
        <FlatList
          data={goals}
          renderItem={ (itemData) =>{
            return(
              <GoalItem style={styles.goalsContainer}
                itemData={itemData}
                oneDeleteItem={handleDeleteGoal}
              />
            )
          }}
          keyExtractor = {(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5
  }
});
