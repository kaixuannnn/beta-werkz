import styled from 'styled-components'

const EmptyPlaceholder = () => {
  return (
    <Container>
      <img src='images/empty-state.png' alt='placeholder' />
      <div>No Profile Yet</div>
      <div>Tap on the button at the bottom to create a new profile.</div>
    </Container>
  )
}

export default EmptyPlaceholder

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`