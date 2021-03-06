class CreateIdeas < ActiveRecord::Migration[5.2]
  def change
    create_table :ideas do |t|
      t.references :user, foreign_key: true
      t.text :content
      t.string :category, array: true, default: []
      t.string :stage
      t.string :channel

      t.timestamps
    end
  end
end
