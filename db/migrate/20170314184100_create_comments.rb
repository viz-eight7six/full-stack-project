class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :guide_id, null: false

      t.timestamps
    end
    add_index :comments, :guide_id
    add_index :comments, :author_id
  end
end
