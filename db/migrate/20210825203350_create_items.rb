class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :discription
      t.belongs_to :department, null: false, foreign_key: true

      t.timestamps
    end
  end
end
