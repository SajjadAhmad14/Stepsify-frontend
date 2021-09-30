const StepsPage = () => (
  <div className='text-center steps-page'>
    <div className='add-steps-heading'>
      <h1>Add Steps</h1>
    </div>
    <h3>Add your running target in kilo meters</h3>
    <div className='steps-input'>
      <form>
        <input type="text" name="steps" placeholder="0.0" />
          <button type="reset" value="Reset" className="reset-btn">Reset</button>
          <button type="submit" className="submit-btn">Add</button>
      </form>
    </div>
  </div>
)

export default StepsPage;